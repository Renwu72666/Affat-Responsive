<%@ WebHandler Language="C#" Class="description_map" %>

using System;
using System.Web;

public class description_map : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        /*if (context.Request.ServerVariables["HTTP_REFERER"] == null)
        {
            context.Response.Redirect("../404.html");
        } else {*/
            string a = context.Request.Form["a"].ToString();
            Method_all insert = new Method_all();
            string result = insert.find_description(a);
            context.Response.Write(result);
        //}
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}