const Source = {
  eventHeader: (parent: Source) => {
    return parent.EventHeader;
  },
  taskName: (parent: Source) => {
    return parent["Task Name"];
  },
  processGuid: (parent: Source) => {
    return parent.ProcessGuid;
  },
  parentProcessGuid: (parent: Source) => {
    return parent.ParentProcessGuid;
  },
};

export default Source;
