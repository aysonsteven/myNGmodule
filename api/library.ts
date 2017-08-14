import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject"
import { DomSanitizer } from "@angular/platform-browser"
@Injectable()
export class GlobalScript{
    changeBinder: Subject<any> = new Subject();
    changeListener: Subject<any> = new Subject();
    timer: any;
    timeOut: boolean = true;
    constructor( private sanitizer: DomSanitizer ){}


    validator( field: string, regex ){
        if( field && field.match( regex ) ) return false;
        return true;
    }

    ellipsis( val: string, maxLength: number ) : string{
      if( val.length > maxLength ) return val.substring( 0 , maxLength - 1 ) + '...';
      return val;
    }

    bind( value ){
      this.changeBinder.next( value );
    }

    listen(){
      return  this.changeListener.subscribe( ( event : any ) => event );
    }

    sanitize( val ): any {
       return this.sanitizer.bypassSecurityTrustResourceUrl( val );
    }

    destroyListener(){
      window.addEventListener("beforeunload", function (e) {
        var confirmationMessage = "asdfsdkfjh";

        e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
        return confirmationMessage;              // Gecko, WebKit, Chrome <34
      });
    }


}
