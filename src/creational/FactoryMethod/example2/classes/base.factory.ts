interface IExportFileResponse<T> {
  type: string;
  data: T;
}

interface IExportFileFactory<T> {
  export(): IExportFileResponse<T>;
}

export abstract class BaseExportFileFactory<T> {
  protected abstract create(): IExportFileFactory<T>;

  writeFile(): IExportFileResponse<T> {
    const factory = this.create();
    const result = factory.export();
    return result;
  }
}
