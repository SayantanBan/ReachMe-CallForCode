import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    @ViewChild("map")
    public mapElement: ElementRef;

    @Input() 
    private _apikey: any;

    @Input()
    public lat: any;

    @Input()
    public lng: any;

    @Input()
    public width: any;

    @Input()
    public height: any;

    // public constructor() { }

    // public ngOnInit() { }

    // public ngAfterViewInit() {
    //     let platform = new H.service.Platform({
    //         "apikey": "EcTtf8P1epdIcAz-iBNYJ1a-o1HlHCECxtxSCVL9FRM" //this._apikey
    //     });
    //     this.lat="18.585315704345703"
    //     this.lng="73.68034362792969"
    //     let defaultLayers = platform.createDefaultLayers();
    //     let map = new H.Map(
    //         this.mapElement.nativeElement,

    //         defaultLayers.vector.normal.map,
    //         {
    //             zoom: 10,
    //             center: { lat: this.lat, lng: this.lng }
    //         }
    //     );
    // }
    private platform: any;
    
//    @ViewChild("map")
    // public mapElement: ElementRef;

    public constructor() {
        this.platform = new H.service.Platform({
            "apikey": "EcTtf8P1epdIcAz-iBNYJ1a-o1HlHCECxtxSCVL9FRM"
        });
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
        let defaultLayers = this.platform.createDefaultLayers();
        let map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.vector.normal.map,
            {
                zoom: 10,
                center: { lat: 18.597370702779937, lng: 73.76599843897888 }
                //center: { lat: this.lat, lng: this.lng}
            }, 
        );
//    //     configure an OMV service to use the `core` enpoint
// var omvService = this.platform.getOMVService({path:  'v2/vectortiles/core/mc'});
// var baseUrl = 'https://js.api.here.com/v3/3.1/styles/omv/oslo/japan/';

// // create a Japan specific style
// var style = new H.map.Style('${baseUrl}normal.day.yaml', baseUrl);

// // instantiate provider and layer for the basemap
// var omvProvider = new H.service.omv.Provider(omvService, style);
// var omvlayer = new H.map.layer.TileLayer(omvProvider, {max: 22});

// // instantiate (and display) a map:
// let  map = new H.Map(
//     this.mapElement.nativeElement,
//     omvlayer,
//     {
//       zoom: 17,
//       center: {lat: 35.68026, lng: 139.76744}
//     });
     }
     onGetLocation(pincode){

        let defaultLayers = this.platform.createDefaultLayers();
        let map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.vector.normal.map,
            {
                zoom: 15,
                center: {lat: 18.598171395858714, lng: 73.7636721102204}
                //center: { lat: this.lat, lng: this.lng}
                
            }, 
        );   
     }
     oncloseDialog(){
 //       this.dialogRef.close();
      }

}