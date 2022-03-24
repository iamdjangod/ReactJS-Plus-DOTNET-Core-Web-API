namespace simple_contact_app.Models
{
    public class UserModel
    {
        public int Id { get; set; }
        
        public string firstName { get; set; }

        public string lastName { get; set; }

        public string email { get; set; }

        public string phone { get; set; }

        public string location {get; set; }
    }
}