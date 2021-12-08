ATTACH TABLE _ UUID '5622ccd4-d3e6-421a-9622-ccd4d3e6221a'
(
    `UserId` UInt32,
    `Account` String,
    `Telephone` String,
    `Name` String,
    `Title` String,
    `Company` String,
    `Department` String,
    `RegisterTime` String,
    `Role` String,
    `Region` String,
    `Preference` String,
    `UserType` String,
    `RoleExpireTime` String,
    `UpdateTime` String,
    `Expert` String,
    `Status` String
)
ENGINE = MergeTree
PRIMARY KEY UserId
ORDER BY UserId
SETTINGS index_granularity = 8192
