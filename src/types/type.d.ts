type Args = {
  _id?: string;
  _ids?: [string];
  processGuid?: string;
  taskName?: string;
};

// EVENT
type SysmonEvent = {
  _index: string;
  _id: string;
  _version: number;
  _score: null;
  _source: Source;
  fields: {
    UtcTime: [Date]; // ['2024-03-26T10:48:09.735Z']
  };
  sort: [number];
};

// _source
type Source = {
  EventHeader: EventHeader;
  "Task Name": string;
  RuleName: string;
  EventType: string;
  UtcTime: string;
  ProcessGuid: string;
  ProcessId: string;
  PipeName: string;
  Image: string;
  User: string;
  Description: string;
  ParentProcessGuid: string;
};

// _source.EventHeader
type EventHeader = {
  Size: number;
  HeaderType: number;
  Flags: number;
  EventProperty: number;
  ThreadId: number;
  ProcessId: number;
  TimeStamp: number;
  ProviderId: string;
  EventDescriptor: EventDescriptor;
  KernelTime: number;
  UserTime: number;
  ActivityId: string;
};

type EventDescriptor = {
  Id: number;
  Version: number;
  Channel: number;
  Level: number;
  Opcode: number;
  Task: number;
  Keyword: number;
};

type Body = {
  query: {
    term?: Object;
    terms?: Object;
    multi_match?: Object;
  };
};
