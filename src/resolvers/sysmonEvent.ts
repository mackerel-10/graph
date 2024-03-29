const SysmonEvent = {
  _id: (parent: SysmonEvent) => {
    return parent._id;
  },
  _source: (parent: SysmonEvent) => {
    return parent._source;
  },
};

export default SysmonEvent;
