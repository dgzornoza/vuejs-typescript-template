export interface ILogger {
    info(msg: any): void;
    warn(msg: any): void;
    error(msg: any): void;
}

export class Logger implements ILogger {

    public info(_msg: any): void {
        // console.info(msg);
    }

    public warn(msg: any): void {
        console.warn(msg);
    }

    public error(msg: any): void {
        console.error(msg);
    }

}
