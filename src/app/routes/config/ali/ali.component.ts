import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-config-ali',
  templateUrl: './ali.component.html',
  styleUrls: ["./ali.component.less"]
})
export class ConfigAliComponent implements OnInit {
  yun: any = {
    accessKey: "J3GdyGZQ0-_6IXr0o1oPtStijmbQ66wsz0Euoi2h",
    secretKey: "F2ea5kVfOlX1h_dv4yIIic0NH7eU_X18566dN3o2",
  }
  loading = false;
  constructor(private http: _HttpClient) { }

  ngOnInit() { }

  save() { }
}