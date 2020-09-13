using AduCon.Model;
using Microsoft.EntityFrameworkCore;

namespace AduCon.Data
{
    public class AdconContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<About> Abouts { get; set; }
        public DbSet<Paragraph> Paragraphs { get; set; }
        public DbSet<Blog> Blogs { get; set; }
        public AdconContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { 

            modelBuilder.Entity<Blog>()
                .ToTable("Blogs"); 

            modelBuilder.Entity<About>()
                .ToTable("Abouts");

            modelBuilder.Entity<User>()
                .ToTable("Users");

            modelBuilder.Entity<Paragraph>()
                .ToTable("Paragraphs"); 
        }
    }
}
