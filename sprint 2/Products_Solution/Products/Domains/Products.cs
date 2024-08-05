using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Products.Domains
{
    public class Productss
    {
        [Key]
        public Guid IdProduct { get; set; } = Guid.NewGuid();

        [Required(ErrorMessage = "O campo nome é obrigatório!")]
        [Column(TypeName = "varchar(100)")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "O campo preço é obrigatório!")]
        [Column(TypeName = "decimal(8, 2)")]
        public decimal Price { get; set; }
    }
}
