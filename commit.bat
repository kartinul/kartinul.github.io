@echo off
if "%*"=="" (
    git add .
    git commit -m "dev commit"
    git push
    cls
    echo commited as "dev commit"!
) else (
    git add .
    git commit -m "%*"
    git push
    cls
    echo commit as "%*"!
)

@echo on
