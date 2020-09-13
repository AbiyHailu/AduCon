using Microsoft.AspNetCore.Authorization;

namespace AduCon.Model
{
    public static class Policies
    {
        public const string Admin = "Admin"; 
        public static AuthorizationPolicy AdminPolicy()
        {
            return new AuthorizationPolicyBuilder().RequireAuthenticatedUser().RequireRole(Admin).Build();
        } 
    }
}
