package com.hbjg.system.controller;


import com.hbjg.system.utils.R;
import com.hbjg.system.pojo.Department;
import com.hbjg.system.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/departments")
public class DepartmentController {

    @Autowired
    private IDepartmentService iDepartmentService;

    @GetMapping
    public R getAll(){
        return new R(true,20000,iDepartmentService.list());
    }

    @PostMapping
    public R save(@RequestBody Department department){
        return new R(true,20000,iDepartmentService.save(department));
    }

    @PutMapping
    public R update(@RequestBody Department department){
        return new R(true,20000,iDepartmentService.updateById(department));
    }

    @DeleteMapping("/{id}")
    public R delete(@PathVariable Integer id){
        return new R(true,20000,iDepartmentService.removeById(id));
    }
}
