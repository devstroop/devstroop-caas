export function StatusViewModel(data) {
  this.Authentication = data.Authentication;
  this.Snapshot = data.Snapshot;
  this.Version = data.Version;
  this.Edition = data.Edition;
  this.InstanceID = data.InstanceID;
  this.DemoEnvironment = data.DemoEnvironment;
}

export function StatusVersionViewModel(data) {
  this.UpdateAvailable = data.UpdateAvailable;
  this.LatestVersion = data.LatestVersion;
}
