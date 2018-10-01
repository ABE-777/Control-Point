using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Helpers.HubModels
{
    public enum HubRole
    {
        Scanner = 1,
        Teacher = 2
    }

    public enum ScannerType
    {
        SingleScanner = 1,
        MultipleScanner = 2
    }

    public enum SaveCardToDismissalStatus
    {
        Saved,
        Student_Not_Found,
        Student_Taked_Away,
        Parent_Not_Found,
        Flight_Is_Full,
        Card_Not_Saved
    }

    public enum Notification
    {
        Card_Removed,
        Scanning_Type_Changed,
        Lane_Changed,
        Lane_Closed
    }
}
