using System.Web;
using System.Web.Optimization;

namespace TypeWell
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            /*!-- Section with library scripts --*/
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

            //Personal bundles section

            //Styles section

            //css for:_Layout.cshtml
            bundles.Add(new StyleBundle("~/Content/Layout").Include(
                    "~/Content/style.css",
                    "~/Content/blocks/attention-text/attention-text.css",
                    "~/Content/blocks/page-footer/page-footer.css",
                    "~/Content/blocks/link/link.css"));

            //css for:Test Index
            bundles.Add(new StyleBundle("~/Content/Test/Index").Include(
                    "~/Content/blocks/main-wrapper/main-wrapper.css",
                    "~/Content/blocks/typewritter/typewritter.css",
                    "~/Content/blocks/button/button.css",
                    "~/Content/blocks/timer/timer.css",
                    "~/Content/blocks/btn-group/btn-group.css"
                    ));

            //css for: Home Index
            bundles.Add(new StyleBundle("~/Content/Home/Index").Include(
                    "~/Content/Home/Index/style.css",
                    "~/Content/blocks/main-wrapper/main-wrapper.css",
                    "~/Content/blocks/typewritter/typewritter.css",
                    "~/Content/blocks/button/button.css",
                    "~/Content/blocks/page-footer/page-footer.css",
                    "~/Content/blocks/card/card.css",
                    "~/Content/blocks/mySlides/mySlides.css"
                ));

            //-----------------------------------------------------------------------

            //Scripts section
            
            //js for: mySlides block
            bundles.Add(new ScriptBundle("~/Content/blocks/mySlidesJs").Include(
                        "~/Content/blocks/mySlides/mySlides.js"));

           //js for: test
            bundles.Add(new ScriptBundle("~/Content/blocks/typewritter").Include(
                        "~/Content/blocks/typewritter/typewritter.js"));

            //------------------------------------------------------------------------
        }
    }
}
