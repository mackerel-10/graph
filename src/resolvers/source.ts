const Source = {
  taskName: (parent: Hit) => {
    const { _source } = parent;

    return _source['Task Name'];
  },
  processGuid: (parent: Hit) => {
    const { _source } = parent;

    return _source.ProcessGuid;
  },
};

export default Source;
