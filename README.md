# bull-test
For `When manualy add redis record, but bull not triggered. ` debugger

# test mind
- create  queue in local name is `mt_notification`
- add some job in that, each job delay 10 m
- listen the queue `mt_notification`

## result
When we change the bull record's key name. it will not execute. unless we add the execute record into the `bull:note-queue:delayed` list. 
If we added like that, it will execute. but need to notice. if we added the record. if the time was passed it will execute immediately.

- so final way is to reset all the records 