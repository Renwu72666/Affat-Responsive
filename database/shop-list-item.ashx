<%@ WebHandler Language="C#" Class="shop_list_item" %>

using System;
using System.Web;

public class shop_list_item : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        if (context.Request.ServerVariables["HTTP_REFERER"] == null)
        {
            context.Response.Redirect("../404.html");
        } else {
            string a = context.Request.Form["a"].ToString();
            Method_all insert = new Method_all();
            string result_check = insert.shop_list_item(a);
            context.Response.Write(result_check);
        }
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}