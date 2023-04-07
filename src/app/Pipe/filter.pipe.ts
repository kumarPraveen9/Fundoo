import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchNote: string) {
    // console.log(searchNote);
    // console.log("the vvvvv is::",value)
    if (value.length === ''){
      return value;
    }

    const Message = [];
    for(const note of value) {
      if(note.title.includes(searchNote)) {
        Message.push(note)
      }
    }
    // console.log("the msg is:",Message);
    
    return Message;
     
  }

}
