using System;
using System.Collections.Generic;
using System.Linq;

namespace WebCreek.Framework.SettingsManager
{

    /// <summary>
    /// Static entity to provide access to application settings based on environment
    /// </summary>
    //============================================================
    //Revision History
    //Date        Author          Description
    //07/26/2017  IvanK             Created
    //============================================================
    public static class SettingsManager
    {
        public static IEnumerable<KeyValuePair<string, string>> AppSettings
        {
            set
            {
                Settings = value.ToDictionary(itemKey => itemKey.Key, itemValue => itemValue.Value);
            }
        }

        private static Dictionary<string, string> Settings;

        public static string GetSetting(params string[] keys)
        {
            return Settings["Settings:" + String.Join(":", keys)];
        }

        //Generic type data convertion case can be added here
        public static T GetSetting<T>(params string[] keys)
        {
            if (typeof(T) == typeof(string))
                return (T)(object)GetSetting(keys);
            if (typeof(T) == typeof(int))
                return (T)(object)Convert.ToInt32(GetSetting(keys));
            if (typeof(T) == typeof(bool))
                return (T)(object)Convert.ToBoolean(GetSetting(keys));
            throw new Exception("Unexpected generic type");
        }
    }
}