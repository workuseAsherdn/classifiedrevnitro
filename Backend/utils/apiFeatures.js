class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    let keyword = this.queryStr.keyword
      ? {
          bikename: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    console.log("backendKeyWord", keyword);

    this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryStrcopy = { ...this.queryStr };
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((field) => delete queryStrcopy[field]);

    let queryStr = JSON.stringify(queryStrcopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)/g, (match) => `$${match}`);

    this.query.find(JSON.parse(queryStr));
    return this;
  }

  paginate(resPerpage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerpage * (currentPage - 1);
    this.query.limit(resPerpage).skip(skip);
    return this;
  }
}

module.exports = APIFeatures;
