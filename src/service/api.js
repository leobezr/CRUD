import Axios from "axios";
import HTTP from "./http";

const exposeHeader = props => {
   return props.header ? { ...props } : {}
};

const customHeader = {
   "Access-Control-Allow-Origin": "*",
}

class Api {
   constructor(options) {
      this.header = options.header || null;
      this.server = options.server || null;
   }
   POST(props) {
      return Axios({
         url: this.server + props.url,
         headers: { ...customHeader, ...exposeHeader(props) },
         method: "POST",
         data: props.body,
      });
   }
   DELETE(props) {
      return Axios({
         url: this.server + props.url,
         headers: { ...customHeader, ...exposeHeader(props) },
         method: "DELETE",
      });
   }
   GET(props) {
      return Axios({
         url: this.server + props.url,
         method: "GET",
         headers: { ...customHeader, ...exposeHeader(props) },
      })
   }
}

export default new Api({ server: HTTP.server, header: customHeader });
