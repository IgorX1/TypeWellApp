using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TypeWell.Startup))]
namespace TypeWell
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
