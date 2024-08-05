using Microsoft.EntityFrameworkCore;
using Products.Domains;

namespace Products.Context
{
    public class _ProdContext : DbContext
    {
        public DbSet<Productss> Products {  get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //User Id = sa; pwd = "Senha" - para quem usa autenticação do SqlServer
            //Caso usemos autenticação do Windows só colocar Integrated Security = True;
            optionsBuilder.UseSqlServer("Server = NOTE04-SALA19\\SQLEXPRESS1; Database = Products_Tarde; User Id = sa; pwd = Senai@134; TrustServerCertificate = True;");
            base.OnConfiguring(optionsBuilder);

        }
    }
}
