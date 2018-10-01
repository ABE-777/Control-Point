namespace WebAPI.Models.Responses
{
    public class ClassroomStudent
    {
        public int CardId { get; set; }
        public string Grade { get; set; }
        public string StudentName { get; set; }
        public int Car { get; set; }
        public bool Classroom { get; set; }
        public bool Hallway { get; set; }
        public int? TeacherId { get; set; }
        public int LaneId { get; set; }
        public int FlightId { get; set; }
        public int FlightNumber { get; set; }
    }
}