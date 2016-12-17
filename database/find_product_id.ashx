<%@ WebHandler Language="C#" Class="find_product_id" %>

using System;
using System.Web;

public class find_product_id : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        if (context.Request.ServerVariables["HTTP_REFERER"] == null)
        {
            context.Response.Redirect("../404.html");
        } else {
            string a = context.Request.Form["a"].ToString();
            Method_all insert = new Method_all();
            string result = insert.product_View_id(a);
            context.Response.Write(result);
        }
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}