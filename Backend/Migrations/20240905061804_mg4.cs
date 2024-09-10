using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OnlineShoppingAppAPI.Migrations
{
    /// <inheritdoc />
    public partial class mg4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "userId",
                table: "CartItems",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_CartItems_userId",
                table: "CartItems",
                column: "userId");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItems_Users_userId",
                table: "CartItems",
                column: "userId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItems_Users_userId",
                table: "CartItems");

            migrationBuilder.DropIndex(
                name: "IX_CartItems_userId",
                table: "CartItems");

            migrationBuilder.DropColumn(
                name: "userId",
                table: "CartItems");
        }
    }
}
