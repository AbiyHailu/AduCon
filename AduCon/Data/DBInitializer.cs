using AduCon.Model;
using System.Linq;

namespace AduCon.Data
{
    public class DBInitializer
    { 
            public static void Initialize(AdconContext context)
            {
                context.Database.EnsureCreated();
                if (!context.Users.Any())
                {
                    var users = new User[]
                    {
                        new User{  Name="Tsedey", Password ="AdminTestPass" },
        
                    };

                    foreach (User u in users)
                    {
                        context.Users.Add(u);
                    }
                    context.SaveChanges();
                }  
            }
        }
    }
