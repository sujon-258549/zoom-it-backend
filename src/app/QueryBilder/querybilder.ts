import { FilterQuery, Query } from 'mongoose';

class QueryBilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchAbleField: string[]) {
    const search = this.query.search;
    if (search) {
      this.modelQuery = this.modelQuery.find({
        $or: searchAbleField.map(
          (filed) =>
            ({
              [filed]: { $regex: search, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }
    return this;
  }

  filter() {
    const queryObject = { ...this.query };
    const excludeField = ['search', 'sort', 'limit', 'page', 'field'];

    excludeField.forEach((element) => delete queryObject[element]);
    this.modelQuery = this.modelQuery.find(queryObject as FilterQuery<T>);
    return this;
  }

  //   sort() {
  //     const sort =
  //       (this?.query?.sort as string)?.split(',')?.join(' ') || '-createdAt';
  //     this.modelQuery = this.modelQuery.sort(sort as string);
  //     return this;
  //   }

  //   sort() {
  //     const sortBy = (this.query.sortBy as string) || 'createdAt'; // Default sort field
  //     const sortOrder =
  //       (this.query.sortOrder as string)?.toLowerCase() === 'desc' ? -1 : 1; // Default ascending
  //     console.log(sortBy, sortOrder);
  //     this.modelQuery = this.modelQuery.sort({ [sortBy]: sortOrder }); // Use computed property for key
  //     return this;
  //   }

  paginaction() {
    const page = Number(this.query.page) || 1;
    const limit = Number(this.query.limit) || 50;
    const skip = (page - 1) * limit;
    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }

  fields() {
    const fields =
      (this.query.fields as string)?.split(',').join(' ') || '-__v';
    this.modelQuery = this.modelQuery.select(fields);
    return this;
  }
}

export default QueryBilder;
