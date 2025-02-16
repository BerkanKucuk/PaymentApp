
using Microsoft.EntityFrameworkCore;

namespace Projem17Ocak.Models
{
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }
    }
}
