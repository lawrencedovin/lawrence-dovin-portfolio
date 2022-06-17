import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "technologiesArrayToString"
})
export class TechnologiesArrayToStringPipe implements PipeTransform {
  transform(technologies: Array<string>): string {
    return technologies.join(' | ')
  }
}
