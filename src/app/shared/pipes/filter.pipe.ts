import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterPipe',
    pure: false
})
export class filterPipe implements PipeTransform {
    
    transform(value: any, searchTerm: any) {
        if (value?.length == 0) {
            return value;
        }
        return value.filter((item: any) => {
            const titleMatch = item?.title.toLowerCase().includes(searchTerm.toLowerCase());
            const subtitleMatch = item?.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
            const aboutMatch = item?.about.toLowerCase().includes(searchTerm.toLowerCase());
            return titleMatch || subtitleMatch || aboutMatch;
        })



    }

}