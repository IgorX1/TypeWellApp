using System.Web;
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

            bundles.Add(new StyleBundle("~/Content/blocks/card").Include(
                       "~/Content/blocks/card/card.css"));

            bundles.Add(new StyleBundle("~/Content/blocks/page-footer").Include(
                       "~/Content/blocks/page-footer/page-footer.css"));

            bundles.Add(new StyleBundle("~/Content/blocks/attention-text").Include(
                       "~/Content/blocks/attention-text/attention-text.css"));

            bundles.Add(new StyleBundle("~/Content/blocks/link").Include(
                       "~/Content/blocks/link/link.css"));

            bundles.Add(new StyleBundle("~/Content/blocks/mySlides").Include(
                       "~/Content/blocks/mySlides/mySlides.css"));

            bundles.Add(new ScriptBundle("~/Content/blocks/mySlidesJs").Include(
                        "~/Content/blocks/mySlides/mySlides.js"));

            bundles.Add(new StyleBundle("~/Content/blocks/timer").Include(
                       "~/Content/blocks/timer/timer.css"));
        }
    }
}
