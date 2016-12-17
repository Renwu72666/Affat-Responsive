<%@ WebHandler Language="C#" Class="view_order" %>

using System;
using System.Web;

public class view_order : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        if (context.Request.ServerVariables["HTTP_REFERER"] == null)
        {
            context.Response.Redirect("../404.html");
        } else {
            Method_all insert = new Method_all();
            string a = context.Request.Form["a"].ToString();
            string result = insert.Order_list(a);
            context.Response.Write(result);
        }
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}