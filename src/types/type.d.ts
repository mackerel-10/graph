interface MyContext {
  token?: String;
}

type Task = {
  _id: String;
};

type Source = {
  EventHeader: EventHeader;
  'Task Name': string;
  RuleName: string;
  EventType: string;
  UtcTime: string;
  ProcessGuid: string;
  ProcessId: string;
  PipeName: string;
  Image: string;
  User: string;
  Description: string;
};

type EventHeader = {
  Size: 412;
  HeaderType: 0;
  Flags: 576;
  EventProperty: 0;
  ThreadId: 5532;
  ProcessId: 4452;
  TimeStamp: 133559236897711760;
  ProviderId: '{5770385F-C22A-43E0-BF4C-06F5698FFBD9}';
  EventDescriptor: {
    Id: 17;
    Version: 1;
    Channel: 16;
    Level: 4;
    Opcode: 0;
    Task: 17;
    Keyword: 9223372036854776000;
  };
  KernelTime: 1244;
  UserTime: 1668;
  ActivityId: '{00000000-0000-0000-0000-000000000000}';
};
