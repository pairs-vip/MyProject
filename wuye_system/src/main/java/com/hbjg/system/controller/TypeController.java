package com.hbjg.system.controller;

import com.hbjg.system.controller.utils.R;
import com.hbjg.system.pojo.Type;
import com.hbjg.system.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/types")
public class TypeController {

    @Autowired
    private ITypeService iTypeService;

    //查看所有一级分类
    @GetMapping
    public R getAll(){
        return new R(true,iTypeService.list());
    }

    //新增一级分类
    @PostMapping
    public R save(@RequestBody Type type){
        return new R(true,iTypeService.save(type));
    }

    //修改一级分类
    @PutMapping
    public R update(@RequestBody Type type){
        return new R(true,iTypeService.updateById(type));
    }

    //删除一级分类（尽量别用，有外键绑定）
    @DeleteMapping("/{id}")
    public R delete(@PathVariable Integer id){
        return new R(true,iTypeService.removeById(id));
    }
}
