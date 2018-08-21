﻿using System.Web;
using System.Web.Optimization;

namespace TypeWell
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            //bundle for layout
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/style.css"                     
                      ));

            bundles.Add(new StyleBundle("~/Content/Home/Index").Include(
                       "~/Content/Home/Index/style.css"));

            /*Since this place we have a new bundle for each bem block*/

            bundles.Add(new StyleBundle("~/Content/blocks/main-wrapper").Include(
                       "~/Content/blocks/main-wrapper/main-wrapper.css"));

            bundles.Add(new StyleBundle("~/Content/blocks/typewritter").Include(
                       "~/Content/blocks/typewritter/typewritter.css"));

            bundles.Add(new StyleBundle("~/Content/blocks/button").Include(
                       "~/Content/blocks/button/button.css"));
        }
    }
}
