package com.hbjg.system.controller;

import com.baomidou.mybatisplus.extension.service.IService;
import com.hbjg.system.controller.utils.R;
import com.hbjg.system.pojo.Condition;
import com.hbjg.system.pojo.Lendlog;
import com.hbjg.system.service.ISlrService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/slrs")
public class SlrController {

    @Autowired
    private ISlrService iSlrService;

    //汇总表，查看当前有哪些资产被谁借走了多少等
    @GetMapping("/{currentPage}/{pageSize}")
    public R getSlrMyPage(@PathVariable Integer currentPage, @PathVariable Integer pageSize, @RequestBody Condition condition){
       return new R(true,iSlrService.selectSlrMyPage(currentPage,pageSize,condition));
    }

    //每次借出通过审核就要进行修改汇总表
    @PutMapping("/lend")
    public R AddNumber(@RequestBody Lendlog lendlog){
        return new R(true,iSlrService.AddNumByUidAndPid(lendlog));
    }

    //每次归还通过审核也要进行修改汇总表
    @PutMapping("/return")
    public R SubNumber(@RequestBody Lendlog lendlog){
        return new R(true,iSlrService.SubNumByUidAndPid(lendlog));
    }

}
