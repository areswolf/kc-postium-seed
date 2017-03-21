import * as moment from "moment";
import "moment/locale/es";

import { Pipe, PipeTransform } from "@angular/core";


@Pipe({ name: "fromnow" })
export class FromNowPipe implements PipeTransform {
    transform(date: number): string {
        return moment(date).fromNow();
    }
}