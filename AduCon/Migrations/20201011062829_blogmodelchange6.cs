using Microsoft.EntityFrameworkCore.Migrations;

namespace AduCon.Migrations
{
    public partial class blogmodelchange6 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "dateCreated",
                table: "Blogs",
                newName: "DateCreated");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateCreated",
                table: "Blogs",
                newName: "dateCreated");
        }
    }
}
