const Source = {
  _id: (parent: Hit) => {
    return parent._id;
  },
  taskName: (parent: Hit) => {
    const { _source } = parent;

    return _source['Task Name'];
  },
  processGuid: (parent: Hit) => {
    const { _source } = parent;

    return _source.ProcessGuid;
  },
  eventHeader: (parent: Hit) => {
    const { _source } = parent;

    return _source.EventHeader;
  },
};

export default Source;
