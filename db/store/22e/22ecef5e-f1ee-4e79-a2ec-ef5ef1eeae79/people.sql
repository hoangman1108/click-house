ATTACH TABLE _ UUID 'be42ec8c-e735-4a13-be42-ec8ce7352a13'
(
    `UserId` String,
    `Account` String,
    `Telephone` String,
    `Name` String,
    `Title` String,
    `Company` String,
    `Department` String,
    `RegisterTime` String,
    `Role` String,
    `Region` String,
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
