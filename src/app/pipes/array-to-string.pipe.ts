import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "arrayToString"
})
export class ArrayToStringPipe implements PipeTransform {
  transform(technologies: Array<string>): string {
    return technologies.join(' | ')
  }
}
