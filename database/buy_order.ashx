<%@ WebHandler Language="C#" Class="buy_order" %>

using System;
using System.Web;

public class buy_order : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        if (context.Request.ServerVariables["HTTP_REFERER"] == null)
        {
            context.Response.Redirect("../404.html");
        } else {
            string a = context.Request.Form["a"].ToString();
            string b = context.Request.Form["b"].ToString();
            string c = context.Request.Form["c"].ToString();
            string d = context.Request.Form["d"].ToString();
            string e = context.Request.Form["e"].ToString();
            string f = context.Request.Form["f"].ToString();
            string g = context.Request.Form["g"].ToString();
            string h = context.Request.Form["h"].ToString();
            string i = context.Request.Form["i"].ToString();
            string j = context.Request.Form["j"].ToString();
            Method_all insert = new Method_all();
            string result = insert.Order_insert(a, b, c, d, e, f, g, h, i, j);
            context.Response.Write(result);
        }
    }

    public bool IsReusable {
        get {
            return false;
        }
    }
}