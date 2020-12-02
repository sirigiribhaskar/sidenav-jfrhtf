import { Component } from "@angular/core";
import { TooltipConfig } from "ngx-bootstrap/tooltip";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [{ provide: TooltipConfig, useFactory: getAlertConfig }]
})
export class AppComponent {
  public collapsed = false;
}

export function getAlertConfig(): TooltipConfig {
  return Object.assign(new TooltipConfig(), {
    placement: "left",
    container: "body1"
  });
}
