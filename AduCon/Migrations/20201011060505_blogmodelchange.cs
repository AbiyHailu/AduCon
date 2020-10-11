using Microsoft.EntityFrameworkCore.Migrations;

namespace AduCon.Migrations
{
    public partial class blogmodelchange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PargraphIds",
                table: "Blogs");

            migrationBuilder.AddColumn<int>(
                name: "blogId",
                table: "Paragraphs",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Paragraphs_blogId",
                table: "Paragraphs",
                column: "blogId");

            migrationBuilder.AddForeignKey(
                name: "FK_Paragraphs_Blogs_blogId",
                table: "Paragraphs",
                column: "blogId",
                principalTable: "Blogs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Paragraphs_Blogs_blogId",
                table: "Paragraphs");

            migrationBuilder.DropIndex(
                name: "IX_Paragraphs_blogId",
                table: "Paragraphs");

            migrationBuilder.DropColumn(
                name: "blogId",
                table: "Paragraphs");

            migrationBuilder.AddColumn<string>(
                name: "PargraphIds",
                table: "Blogs",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
