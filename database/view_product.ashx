<%@ WebHandler Language="C#" Class="view_product" %>

using System;
using System.Web;

public class view_product : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        if (context.Request.ServerVariables["HTTP_REFERER"] == null)
        {
            context.Response.Redirect("../404.html");
        } else {
            Method_all method_ = new Method_all();
            string re_ = method_.product_View();
            context.Response.Write(re_);
        }
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}