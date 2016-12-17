<%@ WebHandler Language="C#" Class="contact_us" %>

using System;
using System.Web;

public class contact_us : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        if (context.Request.ServerVariables["HTTP_REFERER"] == null)
        {
            context.Response.Redirect("../404.html");
        } else {
            string a = context.Request.Form["a"].ToString();
            string b = context.Request.Form["b"].ToString();
            string c = context.Request.Form["c"].ToString();
            string d = context.Request.Form["d"].ToString();
            Method_all insert = new Method_all();
            string result = insert.contact_us_insert(a, b, c, d);
            context.Response.Write(result);
        }
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}