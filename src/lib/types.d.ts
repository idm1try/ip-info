export interface IpInfo {
  ip: string;
  hostname: string;
  anycast: boolean;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
}

export interface IpInfoResponse {
  ip: string;
  setIp: (string) => void;
  ipInfo: ipInfo;
  isLoading: boolean;
}
